// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetLiveDomainMultiStreamConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The main streaming domain.
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
   * Specifies whether to enable the dual-stream disaster recovery feature. Valid values:
   * 
   * *   **on**: enables the feature.
   * *   **off**: disables the feature.
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

