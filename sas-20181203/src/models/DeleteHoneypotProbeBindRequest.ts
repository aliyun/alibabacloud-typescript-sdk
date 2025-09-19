// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteHoneypotProbeBindRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the bound service.
   * 
   * @example
   * aa20815f-f0f3-4e3b-8e13-55771742****
   */
  bindId?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The probe ID.
   * 
   * >  You can call the [ListHoneypotProbe](~~ListHoneypotProbe~~) operation to query the IDs of probes.
   * 
   * @example
   * aa234650-cfcf-4e25-b61f-c58f603f****
   */
  probeId?: string;
  static names(): { [key: string]: string } {
    return {
      bindId: 'BindId',
      lang: 'Lang',
      probeId: 'ProbeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindId: 'string',
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

