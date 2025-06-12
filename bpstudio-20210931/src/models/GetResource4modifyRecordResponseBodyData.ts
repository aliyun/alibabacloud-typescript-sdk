// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResource4ModifyRecordResponseBodyData extends $dara.Model {
  /**
   * @example
   * {\\"InstanceId\\": \\"\\", \\"AttributeName\\": \\"drmCommand\\", \\"Id\\": 16800, \\"Desc\\": \\"test\\"}
   */
  attribute?: string;
  error?: string;
  /**
   * @example
   * 1726645341000
   */
  modifyTime?: string;
  /**
   * @example
   * rm-uf6308dyal1*****
   */
  resourceId?: string;
  /**
   * @example
   * Finish
   */
  status?: string;
  /**
   * @example
   * rds
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      attribute: 'Attribute',
      error: 'Error',
      modifyTime: 'ModifyTime',
      resourceId: 'ResourceId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: 'string',
      error: 'string',
      modifyTime: 'string',
      resourceId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

