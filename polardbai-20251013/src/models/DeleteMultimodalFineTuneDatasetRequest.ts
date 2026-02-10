// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMultimodalFineTuneDatasetRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pc-2ze454l20me07****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ds-***
   */
  datasetId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      datasetId: 'DatasetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      datasetId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

