// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRobotInfoListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/112502.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The basic information about the robot, in the JSON format. The basic information contains the following parameters:
   * 
   * *   **id**: the robot ID.
   * *   **robotName**: the robot name.
   * *   **robotType**: the robot type.
   * *   **auditStatus**: the review state.
   * *   **gmtCreate**: the time when the task was created.
   * *   **gmtModified**: the time when the task was modified.
   * *   **partnerId**: the partner ID.
   * *   **asrId**: the ID of the automatic speech recognition (ASR) model.
   * *   **asrType**: the ASR type. Valid values: **Public** and **Private**.
   * *   **remark**: the additional information.
   * 
   * @example
   * {["id":1000010920004, "gmtModified":"Thu Mar 21 15:38:55 CST 2019", "auditStatus":"AUDITPASS","gmtCreate":"Thu Mar 21 12:00:51 CST 2019","remark":"tset","partnerId":100000022670001,"asrId":"a9a1d69081fd4266ad788346bf5e1b6c","robotType":"CUSTOM","asrType":"1","robotName":"Collection scenario"},{"id":1000010920003,"gmtModified":"Thu Mar 21 11:51:10 CST 2019","auditStatus":"AUDITPASS","gmtCreate":"Thu Mar 21 11:44:57 CST 2019","remark":"test","partnerId":100000022670001,"asrId":"a9a1d69081fd4266ad788346bf5e1b6c","robotType":"CUSTOM","asrType":"1","robotName":"Collection scenario"]}
   */
  data?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F59AF338-655D-48E8-9471-5EB07692B1CC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
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

