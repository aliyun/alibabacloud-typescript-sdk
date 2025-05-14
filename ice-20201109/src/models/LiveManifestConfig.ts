// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LiveManifestConfig extends $dara.Model {
  adMarkers?: string;
  dateTimeInterval?: number;
  manifestDuration?: number;
  maxVideoBitrate?: number;
  minBufferTime?: number;
  minUpdatePeriod?: number;
  minVideoBitrate?: number;
  presentationDelay?: number;
  segmentCount?: number;
  segmentTemplateFormat?: string;
  streamOrder?: string;
  static names(): { [key: string]: string } {
    return {
      adMarkers: 'AdMarkers',
      dateTimeInterval: 'DateTimeInterval',
      manifestDuration: 'ManifestDuration',
      maxVideoBitrate: 'MaxVideoBitrate',
      minBufferTime: 'MinBufferTime',
      minUpdatePeriod: 'MinUpdatePeriod',
      minVideoBitrate: 'MinVideoBitrate',
      presentationDelay: 'PresentationDelay',
      segmentCount: 'SegmentCount',
      segmentTemplateFormat: 'SegmentTemplateFormat',
      streamOrder: 'StreamOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adMarkers: 'string',
      dateTimeInterval: 'number',
      manifestDuration: 'number',
      maxVideoBitrate: 'number',
      minBufferTime: 'number',
      minUpdatePeriod: 'number',
      minVideoBitrate: 'number',
      presentationDelay: 'number',
      segmentCount: 'number',
      segmentTemplateFormat: 'string',
      streamOrder: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

