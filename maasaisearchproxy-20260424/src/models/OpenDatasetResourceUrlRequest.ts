// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenDatasetResourceUrlRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 730
   */
  datasetId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 01KQCJBPM9JVDTXWV50G2AKXXX
   */
  primaryKey?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'datasetId',
      primaryKey: 'primaryKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'number',
      primaryKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

