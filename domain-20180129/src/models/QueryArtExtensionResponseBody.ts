// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryArtExtensionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 2019-10-01
   */
  dateOrPeriod?: string;
  /**
   * @remarks
   * Dimensions.
   * 
   * @example
   * 20 cm
   */
  dimensions?: string;
  /**
   * @remarks
   * Art features.
   * 
   * @example
   * iconicity
   */
  features?: string;
  /**
   * @remarks
   * Inscriptions and markings.
   * 
   * @example
   * realism
   */
  inscriptionsAndMarkings?: string;
  /**
   * @remarks
   * Artist or creator.
   * 
   * @example
   * zhang san
   */
  maker?: string;
  /**
   * @remarks
   * Materials and techniques.
   * 
   * @example
   * silk
   */
  materialsAndTechniques?: string;
  /**
   * @remarks
   * Art categorization.
   * 
   * @example
   * The embroidery
   */
  objectType?: string;
  /**
   * @remarks
   * Reference.
   * 
   * @example
   * drawings
   */
  reference?: string;
  /**
   * @remarks
   * Unique request access token.
   * 
   * @example
   * 814B2AF0-ED6F-4C13-B41C-8AC0B1023583
   */
  requestId?: string;
  /**
   * @remarks
   * Art subject.
   * 
   * @example
   * peace
   */
  subject?: string;
  /**
   * @remarks
   * Name.
   * 
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

