// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateArtifactBuildRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the accelerated image building rule.
   * 
   * @example
   * crabr-7dfa5qye5****
   */
  buildRuleId?: string;
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C8E90AB5-0A96-5D12-9E59-11EE46360642
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      buildRuleId: 'BuildRuleId',
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildRuleId: 'string',
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

