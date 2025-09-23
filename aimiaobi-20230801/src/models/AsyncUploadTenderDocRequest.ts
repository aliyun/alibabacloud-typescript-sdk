// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AsyncUploadTenderDocRequest extends $dara.Model {
  /**
   * @example
   * oss://default/aimiaobi-service-prod/aimiaobi/materialDocument/1601892701595700_10169811/208757545922605632_yst-test_9eb7d7e1deb543d88e2d6f1c9df456ef.docx
   */
  fileKey?: string;
  /**
   * @example
   * tender.pdf
   */
  tenderDocName?: string;
  /**
   * @example
   * llm-az2gglkjauwnnhpq
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      fileKey: 'FileKey',
      tenderDocName: 'TenderDocName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileKey: 'string',
      tenderDocName: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

