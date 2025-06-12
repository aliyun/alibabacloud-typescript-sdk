// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageAsyncModerationRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the moderation service.
   * 
   * @example
   * baselineCheck
   */
  service?: string;
  /**
   * @remarks
   * The parameters required by the moderation service. The value is a JSON string.
   * 
   * @example
   * {"imageUrl":"https://img.alicdn.com/tfs/TB1U4r9AeH2gK0jSZJnXXaT1FXa-2880-480.png","dataId":"img123****"}
   */
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      service: 'Service',
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      service: 'string',
      serviceParameters: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

