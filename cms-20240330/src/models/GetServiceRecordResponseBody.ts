// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceRecordResponseBodyRecord extends $dara.Model {
  /**
   * @remarks
   * The entry content in JSON string format. The returned content varies depending on the recordType.
   * 
   * @example
   * {"project":"proj-xtrace-16c988dcfe21fcb73c5e6f234927d998-cn-hangzhou","storeName":"app-biz-log","regionId":"cn-hangzhou","bindType":"logstore","traceIdRelateField":""}
   */
  recordContent?: string;
  /**
   * @remarks
   * The type of the linked entry. Currently supported values:
   * logCorrelation: indicates application log association.
   * 
   * @example
   * logCorrelation
   */
  recordType?: string;
  /**
   * @remarks
   * The unique identifier of the service.
   * 
   * @example
   * ckj0xn6ma3@b96491402f8e1f15a8c79
   */
  serviceId?: string;
  /**
   * @remarks
   * The workspace.
   * 
   * @example
   * default-cms-1610600919225911-cn-beijing
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      recordContent: 'recordContent',
      recordType: 'recordType',
      serviceId: 'serviceId',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordContent: 'string',
      recordType: 'string',
      serviceId: 'string',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The record.
   */
  record?: GetServiceRecordResponseBodyRecord;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      record: 'record',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      record: GetServiceRecordResponseBodyRecord,
      requestId: 'string',
    };
  }

  validate() {
    if(this.record && typeof (this.record as any).validate === 'function') {
      (this.record as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

