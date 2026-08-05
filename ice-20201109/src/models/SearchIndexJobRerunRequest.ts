// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchIndexJobRerunRequest extends $dara.Model {
  /**
   * @remarks
   * The media asset IDs. Separate multiple IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * ******b48fb04483915d4f2cd8******,******c48fb37407365d4f2cd8******
   */
  mediaIds?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * name-1
   */
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
   * The task type. Separate multiple types with commas (,). Valid values:
   * - aiLabel: intelligent tagging.
   * - face: face recognition.
   * - mm: foundation model.
   * 
   * @example
   * aiLabel,face,mm
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

