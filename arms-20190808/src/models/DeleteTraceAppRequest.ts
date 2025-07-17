// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTraceAppRequestDeleteReasonReasonIds extends $dara.Model {
  /**
   * @remarks
   * The ID of the reason for deletion.
   * 
   * @example
   * 0
   */
  id?: number;
  /**
   * @remarks
   * A description of the reason for removal.
   * 
   * @example
   * The function is not perfect, and the root cause of the problem cannot be located.
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTraceAppRequestDeleteReason extends $dara.Model {
  /**
   * @remarks
   * Reasons Ids.
   */
  reasonIds?: DeleteTraceAppRequestDeleteReasonReasonIds[];
  /**
   * @remarks
   * Additional remarks when none of the reasons for removal provided are met.
   * 
   * @example
   * The business scenario cannot be satisfied.
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      reasonIds: 'ReasonIds',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reasonIds: { 'type': 'array', 'itemType': DeleteTraceAppRequestDeleteReasonReasonIds },
      remark: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.reasonIds)) {
      $dara.Model.validateArray(this.reasonIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTraceAppRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application that you want to delete. You can call the SearchTraceAppByName operation to query the application ID. For more information, see [SearchTraceAppByName](https://help.aliyun.com/document_detail/130676.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 5406**
   */
  appId?: string;
  /**
   * @remarks
   * The reason(s) to delete application.
   */
  deleteReason?: DeleteTraceAppRequestDeleteReason;
  /**
   * @remarks
   * The PID of the application. For more information about how to query the PID, see [QueryMetricByPage](https://www.alibabacloud.com/help/zh/doc-detail/186100.htm?spm=a2cdw.13409063.0.0.7a72281f0bkTfx#title-imy-7gj-qhr).
   * 
   * This parameter is required.
   * 
   * @example
   * 9w0sc5gxxz@edcsd447c2f****
   */
  pid?: string;
  /**
   * @remarks
   * The ID of the region in which the application is located.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the application that you want to delete. You can call the SearchTraceAppByName operation to query the application type. For more information, see [SearchTraceAppByName](https://help.aliyun.com/document_detail/130676.html). Valid values:
   * 
   * *   `TRACE`: Application Monitoring
   * *   `RETCODE`: frontend monitoring
   * 
   * This parameter is required.
   * 
   * @example
   * TRACE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      deleteReason: 'DeleteReason',
      pid: 'Pid',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      deleteReason: DeleteTraceAppRequestDeleteReason,
      pid: 'string',
      regionId: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.deleteReason && typeof (this.deleteReason as any).validate === 'function') {
      (this.deleteReason as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

