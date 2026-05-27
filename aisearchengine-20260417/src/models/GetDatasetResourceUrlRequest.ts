// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDatasetResourceUrlRequest extends $dara.Model {
  /**
   * @example
   * 730
   */
  datasetId?: string;
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
      datasetId: 'string',
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

