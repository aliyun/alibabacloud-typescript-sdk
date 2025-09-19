// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetryInstallProbeRequest extends $dara.Model {
  /**
   * @remarks
   * The probe ID.
   * 
   * >  You can call the [ListHoneypotProbe](~~ListHoneypotProbe~~) operation to query the IDs of probes.
   * 
   * @example
   * c4c47cc1-f60a-4b2f-bcdb-9aed6644****
   */
  probeId?: string;
  static names(): { [key: string]: string } {
    return {
      probeId: 'ProbeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

