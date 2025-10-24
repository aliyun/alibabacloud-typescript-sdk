// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImAuditResponseBodyImageResultsResultResultsFrames extends $dara.Model {
  /**
   * @remarks
   * The score of the confidence level. Valid values: 0 to 100. A higher confidence level indicates higher reliability of the moderation result. We recommend that you do not use this score in your business.
   * 
   * @example
   * 89.85
   */
  rate?: number;
  /**
   * @remarks
   * The temporary access URL of the truncated frame. The URL is valid for 5 minutes.
   * 
   * @example
   * http://example.com/test-01.jpg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      rate: 'rate',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rate: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImAuditResponseBodyImageResultsResultResultsHintWordsInfo extends $dara.Model {
  /**
   * @remarks
   * The term hit by the detected text.
   * 
   * @example
   * Sensitive words
   */
  context?: string;
  static names(): { [key: string]: string } {
    return {
      context: 'context',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImAuditResponseBodyImageResultsResultResultsLogoData extends $dara.Model {
  /**
   * @remarks
   * The height of the logo area. Unit: pixel.
   * 
   * @example
   * 106
   */
  h?: number;
  /**
   * @remarks
   * The name of the detected logo.
   * 
   * @example
   * Hunan TV
   */
  name?: string;
  /**
   * @remarks
   * The type of the detected logo. For example, a value of TV indicates a controlled media logo.
   * 
   * @example
   * TV
   */
  type?: string;
  /**
   * @remarks
   * The width of the logo area. Unit: pixel.
   * 
   * @example
   * 106
   */
  w?: number;
  /**
   * @remarks
   * The distance between the upper-left corner of the logo area and the y-axis, with the upper-left corner of the image being the coordinate origin. Unit: pixel.
   * 
   * @example
   * 140
   */
  x?: number;
  /**
   * @remarks
   * The distance between the upper-left corner of the logo area and the x-axis, with the upper-left corner of the image being the coordinate origin. Unit: pixel.
   * 
   * @example
   * 68
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'h',
      name: 'name',
      type: 'type',
      w: 'w',
      x: 'x',
      y: 'y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: 'number',
      name: 'string',
      type: 'string',
      w: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImAuditResponseBodyImageResultsResultResultsProgramCodeData extends $dara.Model {
  /**
   * @remarks
   * The height of the mini program code area. Unit: pixel.
   * 
   * @example
   * 413.0
   */
  h?: number;
  /**
   * @remarks
   * The width of the mini program code area. Unit: pixel.
   * 
   * @example
   * 402.0
   */
  w?: number;
  /**
   * @remarks
   * The distance between the upper-left corner of the mini program code area and the y-axis, with the upper-left corner of the image being the coordinate origin. Unit: pixel.
   * 
   * @example
   * 11.0
   */
  x?: number;
  /**
   * @remarks
   * The distance between the upper-left corner of the mini program code area and the x-axis, with the upper-left corner of the image being the coordinate origin. Unit: pixel.
   * 
   * @example
   * 0.0
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'h',
      w: 'w',
      x: 'x',
      y: 'y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: 'number',
      w: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImAuditResponseBodyImageResultsResultResultsQrcodeLocations extends $dara.Model {
  /**
   * @remarks
   * The height of the QR code area. Unit: pixel.
   * 
   * @example
   * 413.0
   */
  h?: number;
  /**
   * @remarks
   * The URL that the detected QR code points to.
   * 
   * @example
   * http://xxx
   */
  qrcode?: string;
  /**
   * @remarks
   * The width of the QR code area. Unit: pixel.
   * 
   * @example
   * 402.0
   */
  w?: number;
  /**
   * @remarks
   * The distance between the upper-left corner of the QR code area and the y-axis, with the upper-left corner of the image being the coordinate origin. Unit: pixel.
   * 
   * @example
   * 11
   */
  x?: number;
  /**
   * @remarks
   * The distance between the upper-left corner of the QR code area and the x-axis, with the upper-left corner of the image being the coordinate origin. Unit: pixel.
   * 
   * @example
   * 0
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'h',
      qrcode: 'qrcode',
      w: 'w',
      x: 'x',
      y: 'y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: 'number',
      qrcode: 'string',
      w: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImAuditResponseBodyImageResultsResultResultsSfaceDataFaces extends $dara.Model {
  /**
   * @remarks
   * The ID of the detected face. The value is a string.
   * 
   * @example
   * AliFace_0001234
   */
  idid?: string;
  /**
   * @remarks
   * This value is a string, which indicates the name of a similar person.
   * 
   * @example
   * Name
   */
  name?: string;
  /**
   * @remarks
   * The score of the confidence level. The value is a float point number. Valid values: 0 to 100. A greater value indicates a higher confidence level for facial recognition.
   * 
   * @example
   * 91.54
   */
  re?: number;
  static names(): { [key: string]: string } {
    return {
      idid: 'idid',
      name: 'name',
      re: 're',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idid: 'string',
      name: 'string',
      re: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImAuditResponseBodyImageResultsResultResultsSfaceData extends $dara.Model {
  /**
   * @remarks
   * The information about the face detected in the moderated image.
   */
  faces?: ImAuditResponseBodyImageResultsResultResultsSfaceDataFaces[];
  /**
   * @remarks
   * The height of the face area. Unit: pixel.
   * 
   * @example
   * 121
   */
  h?: number;
  /**
   * @remarks
   * The width of the face area. Unit: pixel.
   * 
   * @example
   * 47
   */
  w?: number;
  /**
   * @remarks
   * The distance between the upper-left corner of the face area and the y-axis, with the upper-left corner of the image being the coordinate origin. Unit: pixel.
   * 
   * @example
   * 49
   */
  x?: number;
  /**
   * @remarks
   * The distance between the upper-left corner of the face area and the y-axis, with the upper-left corner of the image being the coordinate origin. Unit: pixel.
   * 
   * @example
   * 39
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      faces: 'faces',
      h: 'h',
      w: 'w',
      x: 'x',
      y: 'y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faces: { 'type': 'array', 'itemType': ImAuditResponseBodyImageResultsResultResultsSfaceDataFaces },
      h: 'number',
      w: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.faces)) {
      $dara.Model.validateArray(this.faces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImAuditResponseBodyImageResultsResultResults extends $dara.Model {
  /**
   * @remarks
   * The category of the moderation results. Valid values vary based on the specified moderation scenario.
   * 
   * *   If the Scenes parameter is set to porn, the valid values are:
   * 
   *     *   normal: no pornographic content
   *     *   sexy: sexy content
   *     *   porn: pornographic content
   * 
   * *   If the Scenes parameter is set to terrorism, the valid values are:
   * 
   *     *   normal: no pornographic content
   *     *   bloody: bloody content
   *     *   explosion: explosions and smoke
   *     *   outfit: special costume
   *     *   logo: special logo
   *     *   weapon: weapon
   *     *   politics: political content
   *     *   violence: violence
   *     *   crowd: crowd
   *     *   parade: parade
   *     *   carcrash: car accident
   *     *   flag: flag
   *     *   location: landmark
   *     *   others: other content
   * 
   * *   If the Scenes parameter is set to ad, the valid values are:
   * 
   *     *   normal: no pornographic content
   *     *   ad: ad violation
   *     *   politics: politically sensitive content in text
   *     *   porn: pornographic content in text
   *     *   abuse: abuse in text
   *     *   terrorism: terrorist content in text
   *     *   contraband: prohibited content in text
   *     *   spam: junk content in text
   *     *   npx: illegal ad
   *     *   qrcode: QR code
   *     *   programCode: mini program code
   * 
   * *   If the Scenes parameter is set to qrcode, the valid values are:
   * 
   *     *   normal: no pornographic content
   *     *   qrcode: QR code
   *     *   programCode: mini program code
   * 
   * *   If the Scenes parameter is set to live, the valid values are:
   * 
   *     *   normal: no pornographic content
   *     *   meaningless: no content in the image, such as black or white screen
   *     *   PIP: picture-in-picture
   *     *   smoking: smoking
   *     *   drivelive: live broadcasting in a running vehicle
   * 
   * *   If the Scenes parameter is set to logo, the valid values are:
   * 
   *     *   normal: no pornographic content
   *     *   TV: controlled logo
   *     *   trademark: trademark
   * 
   * @example
   * sexy
   */
  label?: string;
  /**
   * @remarks
   * The score of the confidence level. Valid values: 0 to 100. A greater value indicates a higher confidence level. If a value of pass is returned for the suggestion parameter, a higher confidence level indicates a higher probability that the content is normal. If a value of review or block is returned for the suggestion parameter, a higher confidence level indicates a higher probability that the content contains violations.
   * 
   * >  This score is for reference only. We strongly recommend that you do not use this score in your business. We recommend that you use the values that are returned for the suggestion, label, and sublabel parameters to determine whether the content contains violations. The sublabel parameter is returned by some operations.
   * 
   * @example
   * 91.54
   */
  rate?: number;
  /**
   * @remarks
   * The image moderation scenario. Valid values:
   * 
   * *   porn: pornography
   * *   terrorism: terrorist content
   * *   ad: ad violation
   * *   qrcode: QR code
   * *   live: undesirable scene
   * *   logo: special logo
   * 
   * @example
   * porn
   */
  scene?: string;
  /**
   * @remarks
   * The recommended subsequent operation. Valid values:
   * 
   * *   pass: The content passes the moderation. No further actions are required.
   * *   review: The moderation object contains suspected violations and requires human review.
   * *   block: The moderation object contains violations. We recommend that you delete or block the object.
   * 
   * @example
   * block
   */
  suggestion?: string;
  /**
   * @remarks
   * If the temporary access URL of the image is too long, a truncated temporary access URL is returned for each frame.
   */
  frames?: ImAuditResponseBodyImageResultsResultResultsFrames[];
  /**
   * @remarks
   * The information about the term hit by the ad or violation text detected in the moderated image.
   */
  hintWordsInfo?: ImAuditResponseBodyImageResultsResultResultsHintWordsInfo[];
  /**
   * @remarks
   * The information about the logo detected in the moderated image.
   */
  logoData?: ImAuditResponseBodyImageResultsResultResultsLogoData[];
  /**
   * @remarks
   * ocrData
   */
  ocrData?: string[];
  /**
   * @remarks
   * The location information of the mini program code detected in the moderated image.
   */
  programCodeData?: ImAuditResponseBodyImageResultsResultResultsProgramCodeData[];
  /**
   * @remarks
   * The information about the text that is included in the QR code detected in the moderated image.
   */
  qrcodeData?: string[];
  /**
   * @remarks
   * The coordinates of the QR code detected in the image.
   */
  qrcodeLocations?: ImAuditResponseBodyImageResultsResultResultsQrcodeLocations[];
  /**
   * @remarks
   * The information about the terrorist content detected in the moderated image.
   */
  sfaceData?: ImAuditResponseBodyImageResultsResultResultsSfaceData[];
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      rate: 'Rate',
      scene: 'Scene',
      suggestion: 'Suggestion',
      frames: 'frames',
      hintWordsInfo: 'hintWordsInfo',
      logoData: 'logoData',
      ocrData: 'ocrData',
      programCodeData: 'programCodeData',
      qrcodeData: 'qrcodeData',
      qrcodeLocations: 'qrcodeLocations',
      sfaceData: 'sfaceData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      rate: 'number',
      scene: 'string',
      suggestion: 'string',
      frames: { 'type': 'array', 'itemType': ImAuditResponseBodyImageResultsResultResultsFrames },
      hintWordsInfo: { 'type': 'array', 'itemType': ImAuditResponseBodyImageResultsResultResultsHintWordsInfo },
      logoData: { 'type': 'array', 'itemType': ImAuditResponseBodyImageResultsResultResultsLogoData },
      ocrData: { 'type': 'array', 'itemType': 'string' },
      programCodeData: { 'type': 'array', 'itemType': ImAuditResponseBodyImageResultsResultResultsProgramCodeData },
      qrcodeData: { 'type': 'array', 'itemType': 'string' },
      qrcodeLocations: { 'type': 'array', 'itemType': ImAuditResponseBodyImageResultsResultResultsQrcodeLocations },
      sfaceData: { 'type': 'array', 'itemType': ImAuditResponseBodyImageResultsResultResultsSfaceData },
    };
  }

  validate() {
    if(Array.isArray(this.frames)) {
      $dara.Model.validateArray(this.frames);
    }
    if(Array.isArray(this.hintWordsInfo)) {
      $dara.Model.validateArray(this.hintWordsInfo);
    }
    if(Array.isArray(this.logoData)) {
      $dara.Model.validateArray(this.logoData);
    }
    if(Array.isArray(this.ocrData)) {
      $dara.Model.validateArray(this.ocrData);
    }
    if(Array.isArray(this.programCodeData)) {
      $dara.Model.validateArray(this.programCodeData);
    }
    if(Array.isArray(this.qrcodeData)) {
      $dara.Model.validateArray(this.qrcodeData);
    }
    if(Array.isArray(this.qrcodeLocations)) {
      $dara.Model.validateArray(this.qrcodeLocations);
    }
    if(Array.isArray(this.sfaceData)) {
      $dara.Model.validateArray(this.sfaceData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImAuditResponseBodyImageResultsResult extends $dara.Model {
  /**
   * @remarks
   * The error code. The error code is the same as the HTTP status code. This parameter is not returned if the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The ID of the moderated object.
   * 
   * >  If you set the dataId parameter in the moderation request, the dataId parameter is returned in the response.
   * 
   * @example
   * uuid-1234-1234-1234
   */
  dataId?: string;
  /**
   * @remarks
   * The additional information about the image. If ad is specified for the Scenes parameter, the following content may be returned for this parameter: hitLibInfo: the information about the custom text library that is hit by the text in the image. The value of this parameter is an array. For more information about the structure, see [hitLibInfo](https://help.aliyun.com/document_detail/268644.html).
   */
  extras?: { [key: string]: any };
  /**
   * @remarks
   * The message that is returned for the request.
   * 
   * @example
   * ok
   */
  msg?: string;
  /**
   * @remarks
   * The returned data. If the call is successful, the array in the returned results contains one or more elements. Each element is a struct.
   */
  results?: ImAuditResponseBodyImageResultsResultResults[];
  /**
   * @remarks
   * The ID of the moderation task.
   * 
   * @example
   * img4wlJcb7p4wH4lAP3111111-12****
   */
  taskId?: string;
  /**
   * @remarks
   * The URL of the moderated object.
   * 
   * @example
   * http://example.com/example-****.jpg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      dataId: 'dataId',
      extras: 'extras',
      msg: 'msg',
      results: 'results',
      taskId: 'taskId',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      dataId: 'string',
      extras: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      results: { 'type': 'array', 'itemType': ImAuditResponseBodyImageResultsResultResults },
      taskId: 'string',
      url: 'string',
    };
  }

  validate() {
    if(this.extras) {
      $dara.Model.validateMap(this.extras);
    }
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImAuditResponseBodyImageResults extends $dara.Model {
  /**
   * @remarks
   * The image moderation results.
   */
  result?: ImAuditResponseBodyImageResultsResult[];
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': ImAuditResponseBodyImageResultsResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImAuditResponseBodyTextResultsResultResultsDetailsContexts extends $dara.Model {
  /**
   * @remarks
   * The term that the moderated text hits. If the text hits a term, the term is returned. If the text hits the algorithmic model, this parameter is not returned.
   * 
   * @example
   * Door-to-door service
   */
  context?: string;
  /**
   * @remarks
   * The code of the custom text library. This parameter is returned if the moderated text hits a term in the custom text library.
   * 
   * @example
   * 123456
   */
  libCode?: string;
  /**
   * @remarks
   * The name of the custom text library. This parameter is returned if the moderated text hits a term in the custom text library.
   * 
   * @example
   * Name of your custom text library
   */
  libName?: string;
  /**
   * @remarks
   * The position of the term that the moderated text hits in the original text.
   */
  positions?: string[];
  /**
   * @remarks
   * The behavior rule. This parameter is returned if the moderated text hits the behavior rule. Valid values:
   * 
   * *   user_id
   * *   ip
   * *   umid
   * *   content
   * *   similar_content
   * *   imei
   * *   imsi
   * 
   * @example
   * ip
   */
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      context: 'context',
      libCode: 'libCode',
      libName: 'libName',
      positions: 'positions',
      ruleType: 'ruleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: 'string',
      libCode: 'string',
      libName: 'string',
      positions: { 'type': 'array', 'itemType': 'string' },
      ruleType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.positions)) {
      $dara.Model.validateArray(this.positions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImAuditResponseBodyTextResultsResultResultsDetails extends $dara.Model {
  /**
   * @remarks
   * The category of the risky content that the moderated text hits. Valid values:
   * 
   * *   spam: spam
   * *   ad: ad
   * *   politics: political content
   * *   terrorism: terrorist content
   * *   abuse: abuse
   * *   porn: pornographic content
   * *   flood: excessive junk content
   * *   contraband: prohibited content
   * *   meaningless: meaningless content
   * *   customized: custom content, such as a custom keyword
   * 
   * @example
   * porn
   */
  label?: string;
  /**
   * @remarks
   * The context information of the risky content that the moderated text hits.
   */
  contexts?: ImAuditResponseBodyTextResultsResultResultsDetailsContexts[];
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      contexts: 'contexts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      contexts: { 'type': 'array', 'itemType': ImAuditResponseBodyTextResultsResultResultsDetailsContexts },
    };
  }

  validate() {
    if(Array.isArray(this.contexts)) {
      $dara.Model.validateArray(this.contexts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImAuditResponseBodyTextResultsResultResults extends $dara.Model {
  /**
   * @remarks
   * The risky content that the moderated text hits. A text entry can hit multiple pieces of risky content.
   */
  details?: ImAuditResponseBodyTextResultsResultResultsDetails[];
  /**
   * @remarks
   * The category of the moderation result for the moderated text. Valid values:
   * 
   * *   normal: normal content
   * *   spam: spam
   * *   ad: ad
   * *   politics: political content
   * *   terrorism: terrorist content
   * *   abuse: abuse
   * *   porn: pornographic content
   * *   flood: excessive junk content
   * *   contraband: prohibited content
   * *   meaningless: meaningless content
   * *   customized: custom content, such as a custom keyword
   * 
   * @example
   * porn
   */
  label?: string;
  /**
   * @remarks
   * The score of the confidence level. Valid values: 0 to 100. A greater value indicates a higher confidence level. If a value of pass is returned for the suggestion parameter, a higher confidence level indicates a higher probability that the content is normal. If a value of review or block is returned for the suggestion parameter, a higher confidence level indicates a higher probability that the content contains violations.
   * 
   * >  This score is for reference only. We strongly recommend that you do not use this score in your business. We recommend that you use the values that are returned for the suggestion, label, and sublabel parameters to determine whether the content contains violations. The sublabel parameter is returned by some operations.
   * 
   * @example
   * 99.90
   */
  rate?: number;
  /**
   * @remarks
   * The moderation scenario.
   * 
   * @example
   * antispam
   */
  scene?: string;
  /**
   * @remarks
   * The recommended subsequent operation. Valid values:
   * 
   * *   pass: The content passes the moderation.
   * *   review: The content needs to be manually reviewed again.
   * *   block: The content contains violations. We recommend that you delete or block the content.
   * 
   * @example
   * block
   */
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      details: 'details',
      label: 'label',
      rate: 'rate',
      scene: 'scene',
      suggestion: 'suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      details: { 'type': 'array', 'itemType': ImAuditResponseBodyTextResultsResultResultsDetails },
      label: 'string',
      rate: 'number',
      scene: 'string',
      suggestion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.details)) {
      $dara.Model.validateArray(this.details);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImAuditResponseBodyTextResultsResult extends $dara.Model {
  /**
   * @remarks
   * The error code. The error code is the same as the HTTP status code. For more information, see [Error codes](https://help.aliyun.com/document_detail/29254.html).
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The text that you specify in the moderation request.
   * 
   * @example
   * This is test text.
   */
  content?: string;
  /**
   * @remarks
   * The sequence number of the text.
   * 
   * @example
   * cfd33235-71a4-468b-8137-a5ffe323****
   */
  dataId?: string;
  /**
   * @remarks
   * The message that is returned for the request.
   * 
   * @example
   * OK
   */
  msg?: string;
  /**
   * @remarks
   * The returned data. If the HTTP status code 200 is returned, the array in the returned results contains one or more elements. Each element is a struct.
   */
  results?: ImAuditResponseBodyTextResultsResultResults[];
  /**
   * @remarks
   * The ID of the moderation task.
   * 
   * @example
   * txt6HB8NQoEbU@5fosnj2xVEM-1t****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      content: 'content',
      dataId: 'dataId',
      msg: 'msg',
      results: 'results',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      content: 'string',
      dataId: 'string',
      msg: 'string',
      results: { 'type': 'array', 'itemType': ImAuditResponseBodyTextResultsResultResults },
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImAuditResponseBodyTextResults extends $dara.Model {
  /**
   * @remarks
   * The text moderation results.
   */
  result?: ImAuditResponseBodyTextResultsResult[];
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': ImAuditResponseBodyTextResultsResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImAuditResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the image moderation QPS exceeds the limit. Valid values: true and false. A value of true indicates that the QPS does not exceed the limit. A value of false indicates that the QPS exceeds the limit.
   * 
   * @example
   * false
   */
  imageQuotaExceed?: boolean;
  /**
   * @remarks
   * The image moderation results. If the HTTP status code 200 is returned, the array in the returned results contains one or more elements. For more information about the parameters, see [Data returned by the ImAudit operation](https://help.aliyun.com/document_detail/268644.html).
   */
  imageResults?: ImAuditResponseBodyImageResults;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5210DBB0-E327-4D45-ADBC-0B83C8793421
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the text moderation QPS exceeds the limit. Valid values: true and false.
   * 
   * @example
   * false
   */
  textQuotaExceed?: boolean;
  /**
   * @remarks
   * The text moderation results. If the HTTP status code 200 is returned, the array in the returned results contains one or more elements. For more information about the parameters, see [Data returned by the ImAudit operation](https://help.aliyun.com/document_detail/268644.html).
   */
  textResults?: ImAuditResponseBodyTextResults;
  static names(): { [key: string]: string } {
    return {
      imageQuotaExceed: 'ImageQuotaExceed',
      imageResults: 'ImageResults',
      requestId: 'RequestId',
      textQuotaExceed: 'TextQuotaExceed',
      textResults: 'TextResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageQuotaExceed: 'boolean',
      imageResults: ImAuditResponseBodyImageResults,
      requestId: 'string',
      textQuotaExceed: 'boolean',
      textResults: ImAuditResponseBodyTextResults,
    };
  }

  validate() {
    if(this.imageResults && typeof (this.imageResults as any).validate === 'function') {
      (this.imageResults as any).validate();
    }
    if(this.textResults && typeof (this.textResults as any).validate === 'function') {
      (this.textResults as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

