// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFaceUserBatchRequest extends $dara.Model {
  /**
   * @remarks
   * The business isolation ID, which is used to isolate data between different business applications under the same Alibaba Cloud account. Keep this value consistent with the **IsolationId** set when calling the [AddFaceUser](https://help.aliyun.com/document_detail/288338.html) operation to add users.
   * 
   * This parameter is required.
   * 
   * @example
   * ZheJiangHZ
   */
  isolationId?: string;
  /**
   * @remarks
   * The list of user IDs. Pass the user IDs that were obtained and saved locally after calling the [AddFaceUser](https://help.aliyun.com/document_detail/288338.html) operation to add users.
   * 
   * This parameter is required.
   * 
   * @example
   * ["xqymlby****4whye","6qyyb69zqara****","64nbfx8****hzmy4"]
   */
  userIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      isolationId: 'IsolationId',
      userIdList: 'UserIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isolationId: 'string',
      userIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userIdList)) {
      $dara.Model.validateArray(this.userIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

