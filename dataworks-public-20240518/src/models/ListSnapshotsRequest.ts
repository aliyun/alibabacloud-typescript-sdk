// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSnapshotsRequest extends $dara.Model {
  /**
   * @remarks
   * The namespace (project space projectId or personal space baseId).
   * 
   * This parameter is required.
   * 
   * @example
   * 1389623
   */
  namespace?: string;
  /**
   * @remarks
   * The unique ID of the object.
   * 
   * This parameter is required.
   * 
   * @example
   * 8467231038932407294
   */
  objectId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The snapshot type. Multiple values are supported. Valid values: Saved, Deployed, and UnDeployed.
   * 
   * This parameter is required.
   * 
   * @example
   * Saved
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      objectId: 'ObjectId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      objectId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

