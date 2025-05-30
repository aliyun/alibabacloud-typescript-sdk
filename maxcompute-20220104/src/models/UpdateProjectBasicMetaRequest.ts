// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateProjectBasicMetaRequestProperties } from "./UpdateProjectBasicMetaRequestProperties";


export class UpdateProjectBasicMetaRequest extends $dara.Model {
  /**
   * @remarks
   * The project description.
   * 
   * @example
   * BI_Analysis
   */
  comment?: string;
  /**
   * @remarks
   * The basic properties of the project.
   */
  properties?: UpdateProjectBasicMetaRequestProperties;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      properties: 'properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      properties: UpdateProjectBasicMetaRequestProperties,
    };
  }

  validate() {
    if(this.properties && typeof (this.properties as any).validate === 'function') {
      (this.properties as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

