// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchIndexJobRerunRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the media asset. Separate multiple IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * ******b48fb04483915d4f2cd8******,******c48fb37407365d4f2cd8******
   */
  mediaIds?: string;
  namespace?: string;
  /**
   * @remarks
   * The search library.
   * 
   * @example
   * test-1
   */
  searchLibName?: string;
  /**
   * @remarks
   * The type of the job. Separate multiple types with commas (,).
   * 
   * *   aiLabel: smart tagging.
   * *   face: face recognition.
   * *   mm: large visual model.
   * 
   * @example
   * AiLabel,Face,Mm
   */
  task?: string;
  static names(): { [key: string]: string } {
    return {
      mediaIds: 'MediaIds',
      namespace: 'Namespace',
      searchLibName: 'SearchLibName',
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaIds: 'string',
      namespace: 'string',
      searchLibName: 'string',
      task: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

