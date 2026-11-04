// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFaceUserByNameRequest extends $dara.Model {
  /**
   * @remarks
   * The business isolation ID, which is used to isolate data between different business applications under the same Alibaba Cloud account. Make sure that this parameter is consistent with the **IsolationId** set when you call the [AddFaceUser](https://help.aliyun.com/document_detail/288338.html) operation to add a user.
   * 
   * This parameter is required.
   * 
   * @example
   * ZheJiangHZ
   */
  isolationId?: string;
  /**
   * @remarks
   * The username. The name can contain Chinese characters, uppercase and lowercase letters, digits, underscores (_), and hyphens (-), and can be up to 64 characters in length.
   * 
   * Fuzzy match is supported. If this parameter is not specified, all records are matched.
   * 
   * @example
   * Tony
   */
  name?: string;
  /**
   * @remarks
   * The page number of the page to return. Minimum value: 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: 50. Minimum value: 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The custom user parameters.
   * 
   * Exact match is supported, but fuzzy match is not supported.
   * 
   * @example
   * {"key1":"value1", "key2":"value2"}
   */
  params?: string;
  static names(): { [key: string]: string } {
    return {
      isolationId: 'IsolationId',
      name: 'Name',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isolationId: 'string',
      name: 'string',
      pageNo: 'number',
      pageSize: 'number',
      params: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

