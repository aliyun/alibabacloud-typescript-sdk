// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMultimodeCmsUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * hb-t4naqsay5gn******
   */
  clusterId?: string;
  /**
   * @remarks
   * The CloudMonitor URL.
   * 
   * @example
   * htpp://***********
   */
  multimodCmsUrl?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 44183B05-852E-4716-B902-52977140190F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      multimodCmsUrl: 'MultimodCmsUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      multimodCmsUrl: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

