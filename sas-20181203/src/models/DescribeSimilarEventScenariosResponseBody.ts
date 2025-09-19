// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSimilarEventScenariosResponseBodyScenarios extends $dara.Model {
  /**
   * @remarks
   * The code of the scenario. Valid values:
   * 
   * *   **default**: the same alert type
   * *   **same_file_content**: the same file content rule.
   * *   **same_ip**: the same IP address rule.
   * *   **same_url**: the same URL rule.
   * 
   * @example
   * same_url
   */
  code?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSimilarEventScenariosResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FDF7B8D9-8493-4B90-8D13-E0C1FFCE5F97
   */
  requestId?: string;
  /**
   * @remarks
   * The scenarios in which alerts triggered by the same rule or rules of the same type are handled.
   */
  scenarios?: DescribeSimilarEventScenariosResponseBodyScenarios[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scenarios: 'Scenarios',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scenarios: { 'type': 'array', 'itemType': DescribeSimilarEventScenariosResponseBodyScenarios },
    };
  }

  validate() {
    if(Array.isArray(this.scenarios)) {
      $dara.Model.validateArray(this.scenarios);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

