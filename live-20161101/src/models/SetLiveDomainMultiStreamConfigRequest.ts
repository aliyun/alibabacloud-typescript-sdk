// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetLiveDomainMultiStreamConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The primary streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domain?: string;
  ownerId?: number;
  /**
   * @remarks
   * The feature switch. Valid values:
   * - **on**: enabled
   * - **off**: disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  switch?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      ownerId: 'OwnerId',
      switch: 'Switch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      ownerId: 'number',
      switch: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

