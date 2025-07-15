// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddLiveDomainPlayMappingRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The sub-streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * example.aliyundoc.com
   */
  playDomain?: string;
  /**
   * @remarks
   * The main streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  pullDomain?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      playDomain: 'PlayDomain',
      pullDomain: 'PullDomain',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      playDomain: 'string',
      pullDomain: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

