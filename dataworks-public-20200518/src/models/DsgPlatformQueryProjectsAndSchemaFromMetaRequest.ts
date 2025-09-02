// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgPlatformQueryProjectsAndSchemaFromMetaRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the compute engine. Valid values:
   * 
   * *   ODPS.ODPS
   * *   EMR
   * *   HOLO.POSTGRES
   * 
   * This parameter is required.
   * 
   * @example
   * EMR
   */
  engineName?: string;
  static names(): { [key: string]: string } {
    return {
      engineName: 'EngineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engineName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

