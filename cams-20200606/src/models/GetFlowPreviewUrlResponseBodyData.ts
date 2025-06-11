// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFlowPreviewUrlResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The Flow ID.
   * 
   * @example
   * 6dd31e1b7cc940fc99e293d9952b5b79
   */
  flowId?: string;
  /**
   * @remarks
   * The temporary preview URL.
   * 
   * @example
   * https://url
   */
  previewUrl?: string;
  /**
   * @remarks
   * The time when the preview URL expires. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1700617436633
   */
  previewUrlExpires?: number;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
      previewUrl: 'PreviewUrl',
      previewUrlExpires: 'PreviewUrlExpires',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
      previewUrl: 'string',
      previewUrlExpires: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

