// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveSingleTaskForSaveArtExtensionRequest extends $dara.Model {
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test.art
   */
  domainName?: string;
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
   * en
   */
  lang?: string;
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

