// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OSS, * as $OSS from '@alicloud/oss-client';
import RPC, * as $RPC from '@alicloud/rpc-client';
import OpenPlatform, * as $OpenPlatform from '@alicloud/openplatform20191219';
import OSSUtil, * as $OSSUtil from '@alicloud/oss-util';
import FileForm, * as $FileForm from '@alicloud/tea-fileform';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import { Readable } from 'stream';
import * as $tea from '@alicloud/tea-typescript';

export class ExtendImageStyleRequest extends $tea.Model {
  styleUrl?: string;
  majorUrl?: string;
  static names(): { [key: string]: string } {
    return {
      styleUrl: 'StyleUrl',
      majorUrl: 'MajorUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      styleUrl: 'string',
      majorUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtendImageStyleResponseBody extends $tea.Model {
  requestId?: string;
  data?: ExtendImageStyleResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ExtendImageStyleResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtendImageStyleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExtendImageStyleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExtendImageStyleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageBlindCharacterWatermarkRequest extends $tea.Model {
  functionType?: string;
  text?: string;
  watermarkImageURL?: string;
  outputFileType?: string;
  qualityFactor?: number;
  originImageURL?: string;
  static names(): { [key: string]: string } {
    return {
      functionType: 'FunctionType',
      text: 'Text',
      watermarkImageURL: 'WatermarkImageURL',
      outputFileType: 'OutputFileType',
      qualityFactor: 'QualityFactor',
      originImageURL: 'OriginImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionType: 'string',
      text: 'string',
      watermarkImageURL: 'string',
      outputFileType: 'string',
      qualityFactor: 'number',
      originImageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageBlindCharacterWatermarkAdvanceRequest extends $tea.Model {
  originImageURLObject: Readable;
  functionType?: string;
  text?: string;
  watermarkImageURL?: string;
  outputFileType?: string;
  qualityFactor?: number;
  static names(): { [key: string]: string } {
    return {
      originImageURLObject: 'OriginImageURLObject',
      functionType: 'FunctionType',
      text: 'Text',
      watermarkImageURL: 'WatermarkImageURL',
      outputFileType: 'OutputFileType',
      qualityFactor: 'QualityFactor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originImageURLObject: 'Readable',
      functionType: 'string',
      text: 'string',
      watermarkImageURL: 'string',
      outputFileType: 'string',
      qualityFactor: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageBlindCharacterWatermarkResponseBody extends $tea.Model {
  requestId?: string;
  data?: ImageBlindCharacterWatermarkResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ImageBlindCharacterWatermarkResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageBlindCharacterWatermarkResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ImageBlindCharacterWatermarkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ImageBlindCharacterWatermarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveImageWatermarkRequest extends $tea.Model {
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveImageWatermarkAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveImageWatermarkResponseBody extends $tea.Model {
  requestId?: string;
  data?: RemoveImageWatermarkResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RemoveImageWatermarkResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveImageWatermarkResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveImageWatermarkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveImageWatermarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDynamicImageRequest extends $tea.Model {
  url?: string;
  operation?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      operation: 'Operation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      operation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDynamicImageAdvanceRequest extends $tea.Model {
  urlObject: Readable;
  operation?: string;
  static names(): { [key: string]: string } {
    return {
      urlObject: 'UrlObject',
      operation: 'Operation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlObject: 'Readable',
      operation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDynamicImageResponseBody extends $tea.Model {
  requestId?: string;
  data?: GenerateDynamicImageResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GenerateDynamicImageResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDynamicImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GenerateDynamicImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GenerateDynamicImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageBlindPicWatermarkRequest extends $tea.Model {
  functionType?: string;
  logoURL?: string;
  watermarkImageURL?: string;
  outputFileType?: string;
  qualityFactor?: number;
  originImageURL?: string;
  static names(): { [key: string]: string } {
    return {
      functionType: 'FunctionType',
      logoURL: 'LogoURL',
      watermarkImageURL: 'WatermarkImageURL',
      outputFileType: 'OutputFileType',
      qualityFactor: 'QualityFactor',
      originImageURL: 'OriginImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionType: 'string',
      logoURL: 'string',
      watermarkImageURL: 'string',
      outputFileType: 'string',
      qualityFactor: 'number',
      originImageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageBlindPicWatermarkAdvanceRequest extends $tea.Model {
  originImageURLObject: Readable;
  functionType?: string;
  logoURL?: string;
  watermarkImageURL?: string;
  outputFileType?: string;
  qualityFactor?: number;
  static names(): { [key: string]: string } {
    return {
      originImageURLObject: 'OriginImageURLObject',
      functionType: 'FunctionType',
      logoURL: 'LogoURL',
      watermarkImageURL: 'WatermarkImageURL',
      outputFileType: 'OutputFileType',
      qualityFactor: 'QualityFactor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originImageURLObject: 'Readable',
      functionType: 'string',
      logoURL: 'string',
      watermarkImageURL: 'string',
      outputFileType: 'string',
      qualityFactor: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageBlindPicWatermarkResponseBody extends $tea.Model {
  requestId?: string;
  data?: ImageBlindPicWatermarkResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ImageBlindPicWatermarkResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageBlindPicWatermarkResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ImageBlindPicWatermarkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ImageBlindPicWatermarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveImageSubtitlesRequest extends $tea.Model {
  imageURL?: string;
  BX?: number;
  BY?: number;
  BW?: number;
  BH?: number;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      BX: 'BX',
      BY: 'BY',
      BW: 'BW',
      BH: 'BH',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      BX: 'number',
      BY: 'number',
      BW: 'number',
      BH: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveImageSubtitlesAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  BX?: number;
  BY?: number;
  BW?: number;
  BH?: number;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
      BX: 'BX',
      BY: 'BY',
      BW: 'BW',
      BH: 'BH',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
      BX: 'number',
      BY: 'number',
      BW: 'number',
      BH: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveImageSubtitlesResponseBody extends $tea.Model {
  requestId?: string;
  data?: RemoveImageSubtitlesResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RemoveImageSubtitlesResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveImageSubtitlesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveImageSubtitlesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveImageSubtitlesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecolorHDImageRequest extends $tea.Model {
  url?: string;
  mode?: string;
  refUrl?: string;
  colorCount?: number;
  degree?: string;
  async?: boolean;
  colorTemplate?: RecolorHDImageRequestColorTemplate[];
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      mode: 'Mode',
      refUrl: 'RefUrl',
      colorCount: 'ColorCount',
      degree: 'Degree',
      async: 'Async',
      colorTemplate: 'ColorTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      mode: 'string',
      refUrl: 'string',
      colorCount: 'number',
      degree: 'string',
      async: 'boolean',
      colorTemplate: { 'type': 'array', 'itemType': RecolorHDImageRequestColorTemplate },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecolorHDImageAdvanceRequest extends $tea.Model {
  urlObject: Readable;
  mode?: string;
  refUrl?: string;
  colorCount?: number;
  degree?: string;
  async?: boolean;
  colorTemplate?: RecolorHDImageAdvanceRequestColorTemplate[];
  static names(): { [key: string]: string } {
    return {
      urlObject: 'UrlObject',
      mode: 'Mode',
      refUrl: 'RefUrl',
      colorCount: 'ColorCount',
      degree: 'Degree',
      async: 'Async',
      colorTemplate: 'ColorTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlObject: 'Readable',
      mode: 'string',
      refUrl: 'string',
      colorCount: 'number',
      degree: 'string',
      async: 'boolean',
      colorTemplate: { 'type': 'array', 'itemType': RecolorHDImageAdvanceRequestColorTemplate },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecolorHDImageResponseBody extends $tea.Model {
  requestId?: string;
  data?: RecolorHDImageResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RecolorHDImageResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecolorHDImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecolorHDImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecolorHDImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ColorizeImageRequest extends $tea.Model {
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ColorizeImageAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ColorizeImageResponseBody extends $tea.Model {
  requestId?: string;
  data?: ColorizeImageResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ColorizeImageResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ColorizeImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ColorizeImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ColorizeImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecolorImageRequest extends $tea.Model {
  url?: string;
  mode?: string;
  refUrl?: string;
  colorCount?: number;
  colorTemplate?: RecolorImageRequestColorTemplate[];
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      mode: 'Mode',
      refUrl: 'RefUrl',
      colorCount: 'ColorCount',
      colorTemplate: 'ColorTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      mode: 'string',
      refUrl: 'string',
      colorCount: 'number',
      colorTemplate: { 'type': 'array', 'itemType': RecolorImageRequestColorTemplate },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecolorImageResponseBody extends $tea.Model {
  requestId?: string;
  data?: RecolorImageResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RecolorImageResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecolorImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecolorImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecolorImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssessCompositionRequest extends $tea.Model {
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssessCompositionAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssessCompositionResponseBody extends $tea.Model {
  requestId?: string;
  data?: AssessCompositionResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: AssessCompositionResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssessCompositionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AssessCompositionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AssessCompositionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssessSharpnessRequest extends $tea.Model {
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssessSharpnessAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssessSharpnessResponseBody extends $tea.Model {
  requestId?: string;
  data?: AssessSharpnessResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: AssessSharpnessResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssessSharpnessResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AssessSharpnessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AssessSharpnessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ErasePersonRequest extends $tea.Model {
  imageURL?: string;
  userMask?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      userMask: 'UserMask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      userMask: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ErasePersonAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  userMask?: string;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
      userMask: 'UserMask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
      userMask: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ErasePersonResponseBody extends $tea.Model {
  requestId?: string;
  data?: ErasePersonResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ErasePersonResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ErasePersonResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ErasePersonResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ErasePersonResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncJobResultRequest extends $tea.Model {
  async?: boolean;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      async: 'Async',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncJobResultResponseBody extends $tea.Model {
  requestId?: string;
  data?: GetAsyncJobResultResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GetAsyncJobResultResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncJobResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAsyncJobResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAsyncJobResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImitatePhotoStyleRequest extends $tea.Model {
  styleUrl?: string;
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      styleUrl: 'StyleUrl',
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      styleUrl: 'string',
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImitatePhotoStyleAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  styleUrl?: string;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
      styleUrl: 'StyleUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
      styleUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImitatePhotoStyleResponseBody extends $tea.Model {
  requestId?: string;
  data?: ImitatePhotoStyleResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ImitatePhotoStyleResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImitatePhotoStyleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ImitatePhotoStyleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ImitatePhotoStyleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeImageSizeRequest extends $tea.Model {
  width?: number;
  height?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      width: 'Width',
      height: 'Height',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      width: 'number',
      height: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeImageSizeAdvanceRequest extends $tea.Model {
  urlObject: Readable;
  width?: number;
  height?: number;
  static names(): { [key: string]: string } {
    return {
      urlObject: 'UrlObject',
      width: 'Width',
      height: 'Height',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlObject: 'Readable',
      width: 'number',
      height: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeImageSizeResponseBody extends $tea.Model {
  requestId?: string;
  data?: ChangeImageSizeResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ChangeImageSizeResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeImageSizeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ChangeImageSizeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ChangeImageSizeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnhanceImageColorRequest extends $tea.Model {
  imageURL?: string;
  outputFormat?: string;
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      outputFormat: 'OutputFormat',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      outputFormat: 'string',
      mode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnhanceImageColorAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  outputFormat?: string;
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
      outputFormat: 'OutputFormat',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
      outputFormat: 'string',
      mode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnhanceImageColorResponseBody extends $tea.Model {
  requestId?: string;
  data?: EnhanceImageColorResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: EnhanceImageColorResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnhanceImageColorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnhanceImageColorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnhanceImageColorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssessExposureRequest extends $tea.Model {
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssessExposureAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssessExposureResponseBody extends $tea.Model {
  requestId?: string;
  data?: AssessExposureResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: AssessExposureResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssessExposureResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AssessExposureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AssessExposureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MakeSuperResolutionImageRequest extends $tea.Model {
  url?: string;
  mode?: string;
  upscaleFactor?: number;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      mode: 'Mode',
      upscaleFactor: 'UpscaleFactor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      mode: 'string',
      upscaleFactor: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MakeSuperResolutionImageAdvanceRequest extends $tea.Model {
  urlObject: Readable;
  mode?: string;
  upscaleFactor?: number;
  static names(): { [key: string]: string } {
    return {
      urlObject: 'UrlObject',
      mode: 'Mode',
      upscaleFactor: 'UpscaleFactor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlObject: 'Readable',
      mode: 'string',
      upscaleFactor: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MakeSuperResolutionImageResponseBody extends $tea.Model {
  requestId?: string;
  data?: MakeSuperResolutionImageResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: MakeSuperResolutionImageResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MakeSuperResolutionImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: MakeSuperResolutionImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MakeSuperResolutionImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntelligentCompositionRequest extends $tea.Model {
  numBoxes?: number;
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      numBoxes: 'NumBoxes',
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      numBoxes: 'number',
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntelligentCompositionAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  numBoxes?: number;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
      numBoxes: 'NumBoxes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
      numBoxes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntelligentCompositionResponseBody extends $tea.Model {
  requestId?: string;
  data?: IntelligentCompositionResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: IntelligentCompositionResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntelligentCompositionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: IntelligentCompositionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: IntelligentCompositionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtendImageStyleResponseBodyData extends $tea.Model {
  url?: string;
  majorUrl?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      majorUrl: 'MajorUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      majorUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageBlindCharacterWatermarkResponseBodyData extends $tea.Model {
  watermarkImageURL?: string;
  textImageURL?: string;
  static names(): { [key: string]: string } {
    return {
      watermarkImageURL: 'WatermarkImageURL',
      textImageURL: 'TextImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      watermarkImageURL: 'string',
      textImageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveImageWatermarkResponseBodyData extends $tea.Model {
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDynamicImageResponseBodyData extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageBlindPicWatermarkResponseBodyData extends $tea.Model {
  watermarkImageURL?: string;
  logoURL?: string;
  static names(): { [key: string]: string } {
    return {
      watermarkImageURL: 'WatermarkImageURL',
      logoURL: 'LogoURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      watermarkImageURL: 'string',
      logoURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveImageSubtitlesResponseBodyData extends $tea.Model {
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecolorHDImageRequestColorTemplate extends $tea.Model {
  color?: string;
  static names(): { [key: string]: string } {
    return {
      color: 'Color',
    };
  }

  static types(): { [key: string]: any } {
    return {
      color: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecolorHDImageAdvanceRequestColorTemplate extends $tea.Model {
  color?: string;
  static names(): { [key: string]: string } {
    return {
      color: 'Color',
    };
  }

  static types(): { [key: string]: any } {
    return {
      color: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecolorHDImageResponseBodyData extends $tea.Model {
  imageList?: string[];
  static names(): { [key: string]: string } {
    return {
      imageList: 'ImageList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ColorizeImageResponseBodyData extends $tea.Model {
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecolorImageRequestColorTemplate extends $tea.Model {
  color?: string;
  static names(): { [key: string]: string } {
    return {
      color: 'Color',
    };
  }

  static types(): { [key: string]: any } {
    return {
      color: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecolorImageResponseBodyData extends $tea.Model {
  imageList?: string[];
  static names(): { [key: string]: string } {
    return {
      imageList: 'ImageList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssessCompositionResponseBodyData extends $tea.Model {
  score?: number;
  static names(): { [key: string]: string } {
    return {
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      score: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssessSharpnessResponseBodyData extends $tea.Model {
  sharpness?: number;
  static names(): { [key: string]: string } {
    return {
      sharpness: 'Sharpness',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sharpness: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ErasePersonResponseBodyData extends $tea.Model {
  imageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncJobResultResponseBodyData extends $tea.Model {
  status?: string;
  errorMessage?: string;
  result?: string;
  errorCode?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      errorMessage: 'ErrorMessage',
      result: 'Result',
      errorCode: 'ErrorCode',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      errorMessage: 'string',
      result: 'string',
      errorCode: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImitatePhotoStyleResponseBodyData extends $tea.Model {
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeImageSizeResponseBodyDataRetainLocation extends $tea.Model {
  width?: number;
  height?: number;
  y?: number;
  x?: number;
  static names(): { [key: string]: string } {
    return {
      width: 'Width',
      height: 'Height',
      y: 'Y',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      width: 'number',
      height: 'number',
      y: 'number',
      x: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeImageSizeResponseBodyData extends $tea.Model {
  url?: string;
  retainLocation?: ChangeImageSizeResponseBodyDataRetainLocation;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      retainLocation: 'RetainLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      retainLocation: ChangeImageSizeResponseBodyDataRetainLocation,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnhanceImageColorResponseBodyData extends $tea.Model {
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssessExposureResponseBodyData extends $tea.Model {
  exposure?: number;
  static names(): { [key: string]: string } {
    return {
      exposure: 'Exposure',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exposure: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MakeSuperResolutionImageResponseBodyData extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntelligentCompositionResponseBodyDataElements extends $tea.Model {
  minX?: number;
  score?: number;
  maxY?: number;
  maxX?: number;
  minY?: number;
  static names(): { [key: string]: string } {
    return {
      minX: 'MinX',
      score: 'Score',
      maxY: 'MaxY',
      maxX: 'MaxX',
      minY: 'MinY',
    };
  }

  static types(): { [key: string]: any } {
    return {
      minX: 'number',
      score: 'number',
      maxY: 'number',
      maxX: 'number',
      minY: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntelligentCompositionResponseBodyData extends $tea.Model {
  elements?: IntelligentCompositionResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': IntelligentCompositionResponseBodyDataElements },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("imageenhan", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  async extendImageStyleWithOptions(request: ExtendImageStyleRequest, runtime: $Util.RuntimeOptions): Promise<ExtendImageStyleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ExtendImageStyleResponse>(await this.doRPCRequest("ExtendImageStyle", "2019-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new ExtendImageStyleResponse({}));
  }

  async extendImageStyle(request: ExtendImageStyleRequest): Promise<ExtendImageStyleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.extendImageStyleWithOptions(request, runtime);
  }

  async imageBlindCharacterWatermarkWithOptions(request: ImageBlindCharacterWatermarkRequest, runtime: $Util.RuntimeOptions): Promise<ImageBlindCharacterWatermarkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ImageBlindCharacterWatermarkResponse>(await this.doRPCRequest("ImageBlindCharacterWatermark", "2019-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new ImageBlindCharacterWatermarkResponse({}));
  }

  async imageBlindCharacterWatermark(request: ImageBlindCharacterWatermarkRequest): Promise<ImageBlindCharacterWatermarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.imageBlindCharacterWatermarkWithOptions(request, runtime);
  }

  async imageBlindCharacterWatermarkAdvance(request: ImageBlindCharacterWatermarkAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<ImageBlindCharacterWatermarkResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: "openplatform.aliyuncs.com",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "imageenhan",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let imageBlindCharacterWatermarkReq = new ImageBlindCharacterWatermarkRequest({ });
    OpenApiUtil.convert(request, imageBlindCharacterWatermarkReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.originImageURLObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    imageBlindCharacterWatermarkReq.originImageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let imageBlindCharacterWatermarkResp = await this.imageBlindCharacterWatermarkWithOptions(imageBlindCharacterWatermarkReq, runtime);
    return imageBlindCharacterWatermarkResp;
  }

  async removeImageWatermarkWithOptions(request: RemoveImageWatermarkRequest, runtime: $Util.RuntimeOptions): Promise<RemoveImageWatermarkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveImageWatermarkResponse>(await this.doRPCRequest("RemoveImageWatermark", "2019-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveImageWatermarkResponse({}));
  }

  async removeImageWatermark(request: RemoveImageWatermarkRequest): Promise<RemoveImageWatermarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeImageWatermarkWithOptions(request, runtime);
  }

  async removeImageWatermarkAdvance(request: RemoveImageWatermarkAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RemoveImageWatermarkResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: "openplatform.aliyuncs.com",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "imageenhan",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let removeImageWatermarkReq = new RemoveImageWatermarkRequest({ });
    OpenApiUtil.convert(request, removeImageWatermarkReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.imageURLObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    removeImageWatermarkReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let removeImageWatermarkResp = await this.removeImageWatermarkWithOptions(removeImageWatermarkReq, runtime);
    return removeImageWatermarkResp;
  }

  async generateDynamicImageWithOptions(request: GenerateDynamicImageRequest, runtime: $Util.RuntimeOptions): Promise<GenerateDynamicImageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GenerateDynamicImageResponse>(await this.doRPCRequest("GenerateDynamicImage", "2019-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new GenerateDynamicImageResponse({}));
  }

  async generateDynamicImage(request: GenerateDynamicImageRequest): Promise<GenerateDynamicImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateDynamicImageWithOptions(request, runtime);
  }

  async generateDynamicImageAdvance(request: GenerateDynamicImageAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<GenerateDynamicImageResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: "openplatform.aliyuncs.com",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "imageenhan",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let generateDynamicImageReq = new GenerateDynamicImageRequest({ });
    OpenApiUtil.convert(request, generateDynamicImageReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.urlObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    generateDynamicImageReq.url = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let generateDynamicImageResp = await this.generateDynamicImageWithOptions(generateDynamicImageReq, runtime);
    return generateDynamicImageResp;
  }

  async imageBlindPicWatermarkWithOptions(request: ImageBlindPicWatermarkRequest, runtime: $Util.RuntimeOptions): Promise<ImageBlindPicWatermarkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ImageBlindPicWatermarkResponse>(await this.doRPCRequest("ImageBlindPicWatermark", "2019-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new ImageBlindPicWatermarkResponse({}));
  }

  async imageBlindPicWatermark(request: ImageBlindPicWatermarkRequest): Promise<ImageBlindPicWatermarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.imageBlindPicWatermarkWithOptions(request, runtime);
  }

  async imageBlindPicWatermarkAdvance(request: ImageBlindPicWatermarkAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<ImageBlindPicWatermarkResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: "openplatform.aliyuncs.com",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "imageenhan",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let imageBlindPicWatermarkReq = new ImageBlindPicWatermarkRequest({ });
    OpenApiUtil.convert(request, imageBlindPicWatermarkReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.originImageURLObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    imageBlindPicWatermarkReq.originImageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let imageBlindPicWatermarkResp = await this.imageBlindPicWatermarkWithOptions(imageBlindPicWatermarkReq, runtime);
    return imageBlindPicWatermarkResp;
  }

  async removeImageSubtitlesWithOptions(request: RemoveImageSubtitlesRequest, runtime: $Util.RuntimeOptions): Promise<RemoveImageSubtitlesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveImageSubtitlesResponse>(await this.doRPCRequest("RemoveImageSubtitles", "2019-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveImageSubtitlesResponse({}));
  }

  async removeImageSubtitles(request: RemoveImageSubtitlesRequest): Promise<RemoveImageSubtitlesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeImageSubtitlesWithOptions(request, runtime);
  }

  async removeImageSubtitlesAdvance(request: RemoveImageSubtitlesAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RemoveImageSubtitlesResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: "openplatform.aliyuncs.com",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "imageenhan",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let removeImageSubtitlesReq = new RemoveImageSubtitlesRequest({ });
    OpenApiUtil.convert(request, removeImageSubtitlesReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.imageURLObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    removeImageSubtitlesReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let removeImageSubtitlesResp = await this.removeImageSubtitlesWithOptions(removeImageSubtitlesReq, runtime);
    return removeImageSubtitlesResp;
  }

  async recolorHDImageWithOptions(request: RecolorHDImageRequest, runtime: $Util.RuntimeOptions): Promise<RecolorHDImageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecolorHDImageResponse>(await this.doRPCRequest("RecolorHDImage", "2019-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new RecolorHDImageResponse({}));
  }

  async recolorHDImage(request: RecolorHDImageRequest): Promise<RecolorHDImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recolorHDImageWithOptions(request, runtime);
  }

  async recolorHDImageAdvance(request: RecolorHDImageAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecolorHDImageResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: "openplatform.aliyuncs.com",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "imageenhan",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let recolorHDImageReq = new RecolorHDImageRequest({ });
    OpenApiUtil.convert(request, recolorHDImageReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.urlObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    recolorHDImageReq.url = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let recolorHDImageResp = await this.recolorHDImageWithOptions(recolorHDImageReq, runtime);
    return recolorHDImageResp;
  }

  async colorizeImageWithOptions(request: ColorizeImageRequest, runtime: $Util.RuntimeOptions): Promise<ColorizeImageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ColorizeImageResponse>(await this.doRPCRequest("ColorizeImage", "2019-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new ColorizeImageResponse({}));
  }

  async colorizeImage(request: ColorizeImageRequest): Promise<ColorizeImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.colorizeImageWithOptions(request, runtime);
  }

  async colorizeImageAdvance(request: ColorizeImageAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<ColorizeImageResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: "openplatform.aliyuncs.com",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "imageenhan",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let colorizeImageReq = new ColorizeImageRequest({ });
    OpenApiUtil.convert(request, colorizeImageReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.imageURLObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    colorizeImageReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let colorizeImageResp = await this.colorizeImageWithOptions(colorizeImageReq, runtime);
    return colorizeImageResp;
  }

  async recolorImageWithOptions(request: RecolorImageRequest, runtime: $Util.RuntimeOptions): Promise<RecolorImageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecolorImageResponse>(await this.doRPCRequest("RecolorImage", "2019-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new RecolorImageResponse({}));
  }

  async recolorImage(request: RecolorImageRequest): Promise<RecolorImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recolorImageWithOptions(request, runtime);
  }

  async assessCompositionWithOptions(request: AssessCompositionRequest, runtime: $Util.RuntimeOptions): Promise<AssessCompositionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AssessCompositionResponse>(await this.doRPCRequest("AssessComposition", "2019-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new AssessCompositionResponse({}));
  }

  async assessComposition(request: AssessCompositionRequest): Promise<AssessCompositionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.assessCompositionWithOptions(request, runtime);
  }

  async assessCompositionAdvance(request: AssessCompositionAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<AssessCompositionResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: "openplatform.aliyuncs.com",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "imageenhan",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let assessCompositionReq = new AssessCompositionRequest({ });
    OpenApiUtil.convert(request, assessCompositionReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.imageURLObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    assessCompositionReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let assessCompositionResp = await this.assessCompositionWithOptions(assessCompositionReq, runtime);
    return assessCompositionResp;
  }

  async assessSharpnessWithOptions(request: AssessSharpnessRequest, runtime: $Util.RuntimeOptions): Promise<AssessSharpnessResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AssessSharpnessResponse>(await this.doRPCRequest("AssessSharpness", "2019-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new AssessSharpnessResponse({}));
  }

  async assessSharpness(request: AssessSharpnessRequest): Promise<AssessSharpnessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.assessSharpnessWithOptions(request, runtime);
  }

  async assessSharpnessAdvance(request: AssessSharpnessAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<AssessSharpnessResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: "openplatform.aliyuncs.com",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "imageenhan",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let assessSharpnessReq = new AssessSharpnessRequest({ });
    OpenApiUtil.convert(request, assessSharpnessReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.imageURLObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    assessSharpnessReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let assessSharpnessResp = await this.assessSharpnessWithOptions(assessSharpnessReq, runtime);
    return assessSharpnessResp;
  }

  async erasePersonWithOptions(request: ErasePersonRequest, runtime: $Util.RuntimeOptions): Promise<ErasePersonResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ErasePersonResponse>(await this.doRPCRequest("ErasePerson", "2019-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new ErasePersonResponse({}));
  }

  async erasePerson(request: ErasePersonRequest): Promise<ErasePersonResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.erasePersonWithOptions(request, runtime);
  }

  async erasePersonAdvance(request: ErasePersonAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<ErasePersonResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: "openplatform.aliyuncs.com",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "imageenhan",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let erasePersonReq = new ErasePersonRequest({ });
    OpenApiUtil.convert(request, erasePersonReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.imageURLObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    erasePersonReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let erasePersonResp = await this.erasePersonWithOptions(erasePersonReq, runtime);
    return erasePersonResp;
  }

  async getAsyncJobResultWithOptions(request: GetAsyncJobResultRequest, runtime: $Util.RuntimeOptions): Promise<GetAsyncJobResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAsyncJobResultResponse>(await this.doRPCRequest("GetAsyncJobResult", "2019-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetAsyncJobResultResponse({}));
  }

  async getAsyncJobResult(request: GetAsyncJobResultRequest): Promise<GetAsyncJobResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAsyncJobResultWithOptions(request, runtime);
  }

  async imitatePhotoStyleWithOptions(request: ImitatePhotoStyleRequest, runtime: $Util.RuntimeOptions): Promise<ImitatePhotoStyleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ImitatePhotoStyleResponse>(await this.doRPCRequest("ImitatePhotoStyle", "2019-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new ImitatePhotoStyleResponse({}));
  }

  async imitatePhotoStyle(request: ImitatePhotoStyleRequest): Promise<ImitatePhotoStyleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.imitatePhotoStyleWithOptions(request, runtime);
  }

  async imitatePhotoStyleAdvance(request: ImitatePhotoStyleAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<ImitatePhotoStyleResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: "openplatform.aliyuncs.com",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "imageenhan",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let imitatePhotoStyleReq = new ImitatePhotoStyleRequest({ });
    OpenApiUtil.convert(request, imitatePhotoStyleReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.imageURLObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    imitatePhotoStyleReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let imitatePhotoStyleResp = await this.imitatePhotoStyleWithOptions(imitatePhotoStyleReq, runtime);
    return imitatePhotoStyleResp;
  }

  async changeImageSizeWithOptions(request: ChangeImageSizeRequest, runtime: $Util.RuntimeOptions): Promise<ChangeImageSizeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ChangeImageSizeResponse>(await this.doRPCRequest("ChangeImageSize", "2019-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new ChangeImageSizeResponse({}));
  }

  async changeImageSize(request: ChangeImageSizeRequest): Promise<ChangeImageSizeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeImageSizeWithOptions(request, runtime);
  }

  async changeImageSizeAdvance(request: ChangeImageSizeAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<ChangeImageSizeResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: "openplatform.aliyuncs.com",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "imageenhan",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let changeImageSizeReq = new ChangeImageSizeRequest({ });
    OpenApiUtil.convert(request, changeImageSizeReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.urlObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    changeImageSizeReq.url = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let changeImageSizeResp = await this.changeImageSizeWithOptions(changeImageSizeReq, runtime);
    return changeImageSizeResp;
  }

  async enhanceImageColorWithOptions(request: EnhanceImageColorRequest, runtime: $Util.RuntimeOptions): Promise<EnhanceImageColorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnhanceImageColorResponse>(await this.doRPCRequest("EnhanceImageColor", "2019-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new EnhanceImageColorResponse({}));
  }

  async enhanceImageColor(request: EnhanceImageColorRequest): Promise<EnhanceImageColorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enhanceImageColorWithOptions(request, runtime);
  }

  async enhanceImageColorAdvance(request: EnhanceImageColorAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<EnhanceImageColorResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: "openplatform.aliyuncs.com",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "imageenhan",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let enhanceImageColorReq = new EnhanceImageColorRequest({ });
    OpenApiUtil.convert(request, enhanceImageColorReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.imageURLObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    enhanceImageColorReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let enhanceImageColorResp = await this.enhanceImageColorWithOptions(enhanceImageColorReq, runtime);
    return enhanceImageColorResp;
  }

  async assessExposureWithOptions(request: AssessExposureRequest, runtime: $Util.RuntimeOptions): Promise<AssessExposureResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AssessExposureResponse>(await this.doRPCRequest("AssessExposure", "2019-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new AssessExposureResponse({}));
  }

  async assessExposure(request: AssessExposureRequest): Promise<AssessExposureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.assessExposureWithOptions(request, runtime);
  }

  async assessExposureAdvance(request: AssessExposureAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<AssessExposureResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: "openplatform.aliyuncs.com",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "imageenhan",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let assessExposureReq = new AssessExposureRequest({ });
    OpenApiUtil.convert(request, assessExposureReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.imageURLObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    assessExposureReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let assessExposureResp = await this.assessExposureWithOptions(assessExposureReq, runtime);
    return assessExposureResp;
  }

  async makeSuperResolutionImageWithOptions(request: MakeSuperResolutionImageRequest, runtime: $Util.RuntimeOptions): Promise<MakeSuperResolutionImageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<MakeSuperResolutionImageResponse>(await this.doRPCRequest("MakeSuperResolutionImage", "2019-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new MakeSuperResolutionImageResponse({}));
  }

  async makeSuperResolutionImage(request: MakeSuperResolutionImageRequest): Promise<MakeSuperResolutionImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.makeSuperResolutionImageWithOptions(request, runtime);
  }

  async makeSuperResolutionImageAdvance(request: MakeSuperResolutionImageAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<MakeSuperResolutionImageResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: "openplatform.aliyuncs.com",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "imageenhan",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let makeSuperResolutionImageReq = new MakeSuperResolutionImageRequest({ });
    OpenApiUtil.convert(request, makeSuperResolutionImageReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.urlObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    makeSuperResolutionImageReq.url = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let makeSuperResolutionImageResp = await this.makeSuperResolutionImageWithOptions(makeSuperResolutionImageReq, runtime);
    return makeSuperResolutionImageResp;
  }

  async intelligentCompositionWithOptions(request: IntelligentCompositionRequest, runtime: $Util.RuntimeOptions): Promise<IntelligentCompositionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<IntelligentCompositionResponse>(await this.doRPCRequest("IntelligentComposition", "2019-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new IntelligentCompositionResponse({}));
  }

  async intelligentComposition(request: IntelligentCompositionRequest): Promise<IntelligentCompositionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.intelligentCompositionWithOptions(request, runtime);
  }

  async intelligentCompositionAdvance(request: IntelligentCompositionAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<IntelligentCompositionResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: "openplatform.aliyuncs.com",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "imageenhan",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let intelligentCompositionReq = new IntelligentCompositionRequest({ });
    OpenApiUtil.convert(request, intelligentCompositionReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.imageURLObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    intelligentCompositionReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let intelligentCompositionResp = await this.intelligentCompositionWithOptions(intelligentCompositionReq, runtime);
    return intelligentCompositionResp;
  }

}
