// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePluginAttachmentRequest extends $dara.Model {
  /**
   * @remarks
   * The list of mount point IDs.
   */
  attachResourceIds?: string[];
  /**
   * @remarks
   * Specifies whether to enable the plugin.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * The Base64-encoded content of the original plugin configuration.
   * 
   * @example
   * cHJlcGVuZDoKLSByb2xlOiBzeXN0ZW0KICBjb250ZW50OiDor7fkvb/nlKjoi7Hor63lm57nrZTpl67popgKYXBwZW5kOgotIHJvbGU6IHVzZXIKICBjb250ZW50OiDmr4/mrKHlm57nrZTlrozpl67popjvvIzlsJ3or5Xov5vooYzlj43pl64K
   */
  pluginConfig?: string;
  static names(): { [key: string]: string } {
    return {
      attachResourceIds: 'attachResourceIds',
      enable: 'enable',
      pluginConfig: 'pluginConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachResourceIds: { 'type': 'array', 'itemType': 'string' },
      enable: 'boolean',
      pluginConfig: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attachResourceIds)) {
      $dara.Model.validateArray(this.attachResourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

