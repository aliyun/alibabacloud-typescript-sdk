// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRumSymbolFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The actual number of objects that were successfully deleted.
   * 
   * @example
   * 1
   */
  deletedObjectCount?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * request-1
   */
  requestId?: string;
  /**
   * @remarks
   * The number of file paths requested for deletion.
   * 
   * @example
   * 1
   */
  requestedFileCount?: number;
  /**
   * @remarks
   * The total number of deduplicated objects to be deleted.
   * 
   * @example
   * 1
   */
  requestedObjectCount?: number;
  /**
   * @remarks
   * Indicates whether all delete operations succeeded. The value is true only if all deduplicated objects to be deleted are successfully deleted. If a partial deletion failure or exception occurs, the API directly returns an error.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      deletedObjectCount: 'deletedObjectCount',
      requestId: 'requestId',
      requestedFileCount: 'requestedFileCount',
      requestedObjectCount: 'requestedObjectCount',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletedObjectCount: 'number',
      requestId: 'string',
      requestedFileCount: 'number',
      requestedObjectCount: 'number',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

