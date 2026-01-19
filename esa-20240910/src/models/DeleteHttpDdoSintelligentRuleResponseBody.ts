// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteHttpDDoSIntelligentRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * Record name.
   * 
   * @example
   * www.example.com
   */
  recordName?: string;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  /**
   * @remarks
   * Rule ID.
   * 
   * @example
   * 20757864
   */
  ruleId?: number;
  /**
   * @remarks
   * Site ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) interface.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      recordName: 'RecordName',
      requestId: 'RequestId',
      ruleId: 'RuleId',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordName: 'string',
      requestId: 'string',
      ruleId: 'number',
      siteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

