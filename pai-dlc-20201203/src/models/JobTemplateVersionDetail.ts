// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JobTemplateVersionDetail extends $dara.Model {
  constraints?: { [key: string]: string };
  /**
   * @remarks
   * 任务模板的配置内容，支持 CreateJob 接口的所有参数字段，以 JSON 对象存储
   */
  content?: string;
  /**
   * @remarks
   * 创建该版本的用户ID
   */
  createdBy?: string;
  /**
   * @remarks
   * 该版本的创建时间
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   */
  gmtCreated?: string;
  /**
   * @remarks
   * 模板版本号
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      constraints: 'Constraints',
      content: 'Content',
      createdBy: 'CreatedBy',
      gmtCreated: 'GmtCreated',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraints: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      content: 'string',
      createdBy: 'string',
      gmtCreated: 'string',
      version: 'number',
    };
  }

  validate() {
    if(this.constraints) {
      $dara.Model.validateMap(this.constraints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

