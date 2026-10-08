// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveSingleTaskForSaveArtExtensionRequest extends $dara.Model {
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
   * Domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * test.art
   */
  domainName?: string;
  /**
   * @remarks
   * Artistic features.
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
   * Language of the error message returned by the API. Valid values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * Default value: **en**.
   * 
   * @example
   * en
   */
  lang?: string;
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
   * Artwork category.
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
      domainName: 'DomainName',
      features: 'Features',
      inscriptionsAndMarkings: 'InscriptionsAndMarkings',
      lang: 'Lang',
      maker: 'Maker',
      materialsAndTechniques: 'MaterialsAndTechniques',
      objectType: 'ObjectType',
      reference: 'Reference',
      subject: 'Subject',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateOrPeriod: 'string',
      dimensions: 'string',
      domainName: 'string',
      features: 'string',
      inscriptionsAndMarkings: 'string',
      lang: 'string',
      maker: 'string',
      materialsAndTechniques: 'string',
      objectType: 'string',
      reference: 'string',
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

