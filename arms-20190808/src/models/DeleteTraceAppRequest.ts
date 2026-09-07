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
   * 删除理由描述，ID和Name的对应关系：
   * "id":0,"name":"功能不完善，无法定位到问题根本原因。"
   * "id":1,"name":"Agent不稳定，影响应用运行。"
   * "id":2,"name":"服务不稳定，经常打不开界面。"
   * "id":3,"name":"报警相关问题。"
   * "id":4,"name":"价格太贵"
   * "id":5,"name":"其他原因"
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
   * 业务场景覆盖不全
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

