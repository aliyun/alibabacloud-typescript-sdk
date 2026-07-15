// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JobTemplateVersionDetail extends $dara.Model {
  constraints?: { [key: string]: string };
  /**
   * @remarks
   * Configuration content of the job template. It supports all parameter fields of the CreateJob API and is stored as a JSON object.
   */
  content?: string;
  /**
   * @remarks
   * User ID that created this version
   */
  createdBy?: string;
  /**
   * @remarks
   * Creation time of this version
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   */
  gmtCreated?: string;
  /**
   * @remarks
   * Template version number
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      constraints: 'Constraints',
      content: 'Content',
      createdBy: 'CreatedBy',
      gmtCreated: 'GmtCreated',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraints: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      content: 'string',
      createdBy: 'string',
      gmtCreated: 'string',
      version: 'number',
    };
  }

  validate() {
    if(this.constraints) {
      $dara.Model.validateMap(this.constraints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

