// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EstablishRelationTableToBusinessRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1000001
   */
  businessId?: string;
  /**
   * @example
   * 2eb6f9****
   */
  folderId?: string;
  /**
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @example
   * dw
   */
  projectIdentifier?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * odps.dw_project.tb1
   */
  tableGuid?: string;
  static names(): { [key: string]: string } {
    return {
      businessId: 'BusinessId',
      folderId: 'FolderId',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      tableGuid: 'TableGuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessId: 'string',
      folderId: 'string',
      projectId: 'number',
      projectIdentifier: 'string',
      tableGuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

