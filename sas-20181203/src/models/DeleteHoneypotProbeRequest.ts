// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteHoneypotProbeRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese.
   * *   **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the probe.
   * 
   * > You can call the [ListHoneypotProbe](~~ListHoneypotProbe~~) operation to query the IDs of probes.
   * 
   * This parameter is required.
   * 
   * @example
   * 95f0f79c-f7e9-4b09-a6e3-95a4cb6d****
   */
  probeId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      probeId: 'ProbeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      probeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

