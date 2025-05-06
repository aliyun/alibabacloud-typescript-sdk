// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Credential } from "./Credential";


export class Artifact extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  bizId?: string;
  catagoryBizId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  creator?: number;
  credential?: Credential;
  fullPath?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  gmtCreated?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  gmtModified?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  location?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  modifier?: number;
  modifierName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'bizId',
      catagoryBizId: 'catagoryBizId',
      creator: 'creator',
      credential: 'credential',
      fullPath: 'fullPath',
      gmtCreated: 'gmtCreated',
      gmtModified: 'gmtModified',
      location: 'location',
      modifier: 'modifier',
      modifierName: 'modifierName',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      catagoryBizId: 'string',
      creator: 'number',
      credential: Credential,
      fullPath: { 'type': 'array', 'itemType': 'string' },
      gmtCreated: 'string',
      gmtModified: 'string',
      location: 'string',
      modifier: 'number',
      modifierName: 'string',
      name: 'string',
    };
  }

  validate() {
    if(this.credential && typeof (this.credential as any).validate === 'function') {
      (this.credential as any).validate();
    }
    if(Array.isArray(this.fullPath)) {
      $dara.Model.validateArray(this.fullPath);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

