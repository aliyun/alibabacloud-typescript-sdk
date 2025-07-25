// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNisNetworkMetricsRequestDimensions extends $dara.Model {
  /**
   * @example
   * instanceId
   */
  name?: string;
  /**
   * @example
   * eip-sample*
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

