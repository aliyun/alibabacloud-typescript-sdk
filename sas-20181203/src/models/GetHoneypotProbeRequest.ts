// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHoneypotProbeRequest extends $dara.Model {
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
   * The probe ID.
   * 
   * > You can call the [ListHoneypotProbe](~~ListHoneypotProbe~~) operation to query the IDs of probes.
   * 
   * This parameter is required.
   * 
   * @example
   * d6c1ebc9-a90d-4c9e-9490-328814d1ca00
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

