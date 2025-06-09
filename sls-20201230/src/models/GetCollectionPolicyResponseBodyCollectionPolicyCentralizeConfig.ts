// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCollectionPolicyResponseBodyCollectionPolicyCentralizeConfig extends $dara.Model {
  /**
   * @example
   * your-sls-logstore-in-beijing
   */
  destLogstore?: string;
  /**
   * @example
   * your-sls-project-in-beijing
   */
  destProject?: string;
  /**
   * @example
   * cn-beijing
   */
  destRegion?: string;
  /**
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

