// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpsertCollectionPolicyRequestDataConfig extends $dara.Model {
  /**
   * @remarks
   * The region for storing the global logs that are collected for the first time.
   * 
   * @example
   * cn-beijing
   */
  dataRegion?: string;
  static names(): { [key: string]: string } {
    return {
      dataRegion: 'dataRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataRegion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

