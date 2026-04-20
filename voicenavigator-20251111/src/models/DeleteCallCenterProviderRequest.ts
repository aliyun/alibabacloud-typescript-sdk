// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCallCenterProviderRequest extends $dara.Model {
  /**
   * @example
   * 36e9a4cd-a821-4f78-86fa-a9a4aefeea2e
   */
  instanceId?: string;
  /**
   * @example
   * xxxxxxxxx
   */
  providerId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      providerId: 'ProviderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      providerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

