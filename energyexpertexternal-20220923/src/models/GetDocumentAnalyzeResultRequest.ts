// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocumentAnalyzeResultRequest extends $dara.Model {
  /**
   * @remarks
   * Job ID, specifying which document\\"s parsing result to query. This is a return parameter from the \\"Submit Document Parsing Job\\" interface.
   * 
   * This parameter is required.
   * 
   * @example
   * bfce2248-1546-4298-8bcf-70ac26e69646
   */
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'jobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

