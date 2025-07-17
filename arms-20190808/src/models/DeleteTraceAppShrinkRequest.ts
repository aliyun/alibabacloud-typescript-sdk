// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTraceAppShrinkRequest extends $dara.Model {
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
  deleteReasonShrink?: string;
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
      deleteReasonShrink: 'DeleteReason',
      pid: 'Pid',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      deleteReasonShrink: 'string',
      pid: 'string',
      regionId: 'string',
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

