// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryArtExtensionResponseBody extends $dara.Model {
  /**
   * @example
   * 2019-10-01
   */
  dateOrPeriod?: string;
  /**
   * @example
   * 20 cm
   */
  dimensions?: string;
  /**
   * @example
   * iconicity
   */
  features?: string;
  /**
   * @example
   * realism
   */
  inscriptionsAndMarkings?: string;
  /**
   * @example
   * zhang san
   */
  maker?: string;
  /**
   * @example
   * silk
   */
  materialsAndTechniques?: string;
  /**
   * @example
   * The embroidery
   */
  objectType?: string;
  /**
   * @example
   * drawings
   */
  reference?: string;
  /**
   * @example
   * 814B2AF0-ED6F-4C13-B41C-8AC0B1023583
   */
  requestId?: string;
  /**
   * @example
   * peace
   */
  subject?: string;
  /**
   * @example
   * Peace and friendship
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      dateOrPeriod: 'DateOrPeriod',
      dimensions: 'Dimensions',
      features: 'Features',
      inscriptionsAndMarkings: 'InscriptionsAndMarkings',
      maker: 'Maker',
      materialsAndTechniques: 'MaterialsAndTechniques',
      objectType: 'ObjectType',
      reference: 'Reference',
      requestId: 'RequestId',
      subject: 'Subject',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateOrPeriod: 'string',
      dimensions: 'string',
      features: 'string',
      inscriptionsAndMarkings: 'string',
      maker: 'string',
      materialsAndTechniques: 'string',
      objectType: 'string',
      reference: 'string',
      requestId: 'string',
      subject: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

