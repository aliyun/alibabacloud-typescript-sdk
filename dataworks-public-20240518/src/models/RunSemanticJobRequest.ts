// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunSemanticJobRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the job to run. Use the Data.Name value from the CreateSemanticJob response or the Name value from a ListSemanticJobs list item. The Source, ResourceGroupId, and reference files of the job are determined by the definition saved at creation time.
   * 
   * This parameter is required.
   * 
   * @example
   * semantic-job-demo
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

