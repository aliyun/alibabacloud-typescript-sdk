// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteResourceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * A client token to ensure idempotence. This parameter works only if the cloud product supports idempotence.
   * 
   * @example
   * 1e810dfe1468721d0664a49b9d9f74f4
   */
  clientToken?: string;
  filterShrink?: string;
  /**
   * @remarks
   * The region ID. This parameter is required if the cloud product is region-specific.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      filterShrink: 'filter',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      filterShrink: 'string',
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

