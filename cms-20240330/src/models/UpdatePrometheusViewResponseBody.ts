// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePrometheusViewResponseBody extends $dara.Model {
  /**
   * @example
   * rw-xxxxxx
   */
  prometheusViewId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 64D964F5-76C7-19A2-9399-457744AB3619
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      prometheusViewId: 'prometheusViewId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prometheusViewId: 'string',
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

