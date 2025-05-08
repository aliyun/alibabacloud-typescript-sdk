// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitIndexJobResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The primary key ID of the job, which is the `JobId` parameter of the [GetIndexJobStatus](https://www.alibabacloud.com/help/en/model-studio/developer-reference/api-bailian-2023-12-29-getindexjobstatus) operation.
   * 
   * @example
   * eFDr2fGRzP9gdDZWAdo3YQ==
   */
  id?: string;
  /**
   * @remarks
   * The primary key ID of the knowledge base.
   * 
   * @example
   * khdyak1uuj
   */
  indexId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      indexId: 'IndexId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      indexId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

