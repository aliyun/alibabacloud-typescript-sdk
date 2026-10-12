// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate file, which is the unique identifier of the certificate file.
   * 
   * This parameter is required.
   * 
   * @example
   * 676303114031776
   */
  id?: number;
  /**
   * @remarks
   * The ID of the project to which the certificate file belongs. You can also call the ListProjects operation to query the workspace ID under the current tenant.
   * 
   * This parameter is required.
   * 
   * @example
   * 1065601
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

