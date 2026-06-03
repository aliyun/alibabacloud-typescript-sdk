// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveSingleTaskForSaveArtExtensionRequest extends $dara.Model {
  dateOrPeriod?: string;
  dimensions?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  domainName?: string;
  features?: string;
  inscriptionsAndMarkings?: string;
  lang?: string;
  maker?: string;
  materialsAndTechniques?: string;
  objectType?: string;
  reference?: string;
  subject?: string;
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

