// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUpgradableVersionsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c-b25e21e24388****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether to query the minor versions that you can upgrade to. Default value: true. Valid values:
   * 
   * *   true: The minor versions that you can upgrade to.
   * *   false: The major versions that you can upgrade to.
   * 
   * @example
   * true
   */
  minor?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      minor: 'Minor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      minor: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

