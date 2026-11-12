// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DryRunViolation } from "./DryRunViolation";


export class DryRunResult extends $dara.Model {
  /**
   * @remarks
   * The exit code. A value of 0 indicates that the validation passed. A value of 1 indicates that the request was rejected by business rules. For specific reasons, see violations. A value of 2 indicates that the request structure cannot be parsed and rule validation cannot be performed.
   * 
   * @example
   * 1
   */
  exitCode?: number;
  /**
   * @remarks
   * The text representation of the result. A value of ok indicates that the validation passed, and rejected indicates that the request was rejected by business rules. This field is empty when the exit code is 2, which means the request structure cannot be parsed.
   * 
   * @example
   * rejected
   */
  result?: string;
  /**
   * @remarks
   * The list of violations. Each violation consists of three elements: field, message, and suggestion, which represent the path of the violated field, the violation description, and the remediation suggestion, respectively. This array is empty when the exit code is 0 (passed). All violations are listed when the exit code is 1 (rejected by business rules). The location and cause of the unparseable fields are provided when the exit code is 2 (unparseable request structure).
   * 
   * @example
   * [{"field":"schedule.intervalSecs","message":"schedule interval must be a multiple of 15 seconds","suggestion":"must satisfy: 15-86400 seconds and a multiple of 15"}]
   */
  violations?: DryRunViolation[];
  static names(): { [key: string]: string } {
    return {
      exitCode: 'exitCode',
      result: 'result',
      violations: 'violations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exitCode: 'number',
      result: 'string',
      violations: { 'type': 'array', 'itemType': DryRunViolation },
    };
  }

  validate() {
    if(Array.isArray(this.violations)) {
      $dara.Model.validateArray(this.violations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

