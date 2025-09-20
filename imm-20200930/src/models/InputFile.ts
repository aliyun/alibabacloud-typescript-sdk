// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Address } from "./Address";
import { Label } from "./Label";


export class InputFileFigures extends $dara.Model {
  figureClusterId?: string;
  figureId?: string;
  figureType?: string;
  static names(): { [key: string]: string } {
    return {
      figureClusterId: 'FigureClusterId',
      figureId: 'FigureId',
      figureType: 'FigureType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      figureClusterId: 'string',
      figureId: 'string',
      figureType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InputFile extends $dara.Model {
  addresses?: Address[];
  album?: string;
  albumArtist?: string;
  artist?: string;
  composer?: string;
  contentType?: string;
  customId?: string;
  customLabels?: { [key: string]: any };
  figures?: InputFileFigures[];
  fileHash?: string;
  labels?: Label[];
  latLong?: string;
  mediaType?: string;
  OSSURI?: string;
  performer?: string;
  produceTime?: string;
  title?: string;
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      addresses: 'Addresses',
      album: 'Album',
      albumArtist: 'AlbumArtist',
      artist: 'Artist',
      composer: 'Composer',
      contentType: 'ContentType',
      customId: 'CustomId',
      customLabels: 'CustomLabels',
      figures: 'Figures',
      fileHash: 'FileHash',
      labels: 'Labels',
      latLong: 'LatLong',
      mediaType: 'MediaType',
      OSSURI: 'OSSURI',
      performer: 'Performer',
      produceTime: 'ProduceTime',
      title: 'Title',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': Address },
      album: 'string',
      albumArtist: 'string',
      artist: 'string',
      composer: 'string',
      contentType: 'string',
      customId: 'string',
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      figures: { 'type': 'array', 'itemType': InputFileFigures },
      fileHash: 'string',
      labels: { 'type': 'array', 'itemType': Label },
      latLong: 'string',
      mediaType: 'string',
      OSSURI: 'string',
      performer: 'string',
      produceTime: 'string',
      title: 'string',
      URI: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addresses)) {
      $dara.Model.validateArray(this.addresses);
    }
    if(this.customLabels) {
      $dara.Model.validateMap(this.customLabels);
    }
    if(Array.isArray(this.figures)) {
      $dara.Model.validateArray(this.figures);
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

