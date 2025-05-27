// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEventStreamingRequestSinkSinkPrometheusParametersData extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: JSAONPATH.
   * 
   * @example
   * JSAONPATH
   */
  form?: string;
  /**
   * @remarks
   * The template based on which you want to transform events.
   */
  template?: string;
  /**
   * @remarks
   * The metric data.
   * 
   * @example
   * $.data
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

