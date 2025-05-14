// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLiveRecordTemplatesResponseBodyRecordTemplateListRecordFormatList } from "./ListLiveRecordTemplatesResponseBodyRecordTemplateListRecordFormatList";


export class ListLiveRecordTemplatesResponseBodyRecordTemplateList extends $dara.Model {
  /**
   * @remarks
   * The time when the job was created.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2022-07-20T02:48:58Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the template was last modified.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2022-07-20T03:26:36Z
   */
  lastModified?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * test template
   */
  name?: string;
  /**
   * @remarks
   * The list of recording formats.
   */
  recordFormatList?: ListLiveRecordTemplatesResponseBodyRecordTemplateListRecordFormatList[];
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * 69e1f9fe-1e97-11ed-ba64-0c42a1b73d66
   */
  templateId?: string;
  /**
   * @remarks
   * The type of the template.
   * 
   * @example
   * custom
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      lastModified: 'LastModified',
      name: 'Name',
      recordFormatList: 'RecordFormatList',
      templateId: 'TemplateId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      lastModified: 'string',
      name: 'string',
      recordFormatList: { 'type': 'array', 'itemType': ListLiveRecordTemplatesResponseBodyRecordTemplateListRecordFormatList },
      templateId: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.recordFormatList)) {
      $dara.Model.validateArray(this.recordFormatList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

