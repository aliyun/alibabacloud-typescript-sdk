// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpsertCollectionPolicyRequestCentralizeConfig extends $dara.Model {
  /**
   * @remarks
   * The destination logstore for centralized storage. Make sure that the region of the destination logstore is consistent with the region specified by destRegion and the destination logstore belongs to the destination project specified by destProject.
   * 
   * @example
   * your-sls-logstore-in-beijing
   */
  destLogstore?: string;
  /**
   * @remarks
   * The destination project for centralized storage. Make sure that the region of the destination project is consistent with the region specified by destRegion.
   * 
   * @example
   * your-sls-project-in-beijing
   */
  destProject?: string;
  /**
   * @remarks
   * The destination region for centralized storage.
   * 
   * @example
   * cn-beijing
   */
  destRegion?: string;
  /**
   * @remarks
   * The data retention period for centralized storage. Unit: days. This parameter takes effect only when you use an existing logstore for centralized storage.
   * 
   * @example
   * your-sls-logstore-ttl
   */
  destTTL?: number;
  static names(): { [key: string]: string } {
    return {
      destLogstore: 'destLogstore',
      destProject: 'destProject',
      destRegion: 'destRegion',
      destTTL: 'destTTL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destLogstore: 'string',
      destProject: 'string',
      destRegion: 'string',
      destTTL: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

